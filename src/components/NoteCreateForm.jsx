import { Component } from "react"
import autoBind from "auto-bind/react"

class NoteCreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      characterLeft: 50,
    }
    autoBind(this)
  }

  titleChangeHandler(ev) {
    const characterLimit = 50
    if (ev.target.value.length > characterLimit) return

    this.setState({
      title: ev.target.value,
      characterLeft: characterLimit - ev.target.value.length,
    })
  }

  submitHandler(ev) {
    ev.preventDefault()
    const { title, content } = this.state
    if (!title || !content) return

    this.props.addNote({ title, content })
    this.setState({ title: "", content: "", characterLeft: 50 })
  }

  render() {
    const { title, content, characterLeft } = this.state
    return (
      <div className="w-2/5 bg-gray-800 border border-gray-700 rounded-lg p-4 sticky top-5 h-fit xl:w-full xl:max-w-xl xl:mx-auto xl:static">
        <form className="space-y-5" onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="title" className="block mb-2 font-medium text-sm text-gray-200">
              Judul Catatan
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.titleChangeHandler}
              value={title}
              placeholder="Contoh: Belajar React"
              className="block rounded-lg border focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <span className="text-sm text-gray-400">Sisa Karakter : {characterLeft}</span>
          </div>
          <div>
            <label htmlFor="content" className="block mb-2 font-medium text-sm text-gray-200">
              Isi Catatan
            </label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet"
              onChange={(ev) => this.setState({ content: ev.target.value })}
              value={content}
              className="block h-32 rounded-lg border focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium p-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!title || !content}
            >
              Tambah Catatan
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NoteCreateForm
