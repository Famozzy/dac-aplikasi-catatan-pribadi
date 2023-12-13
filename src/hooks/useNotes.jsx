import { useState, useEffect } from "react"

export default function useNotes(note) {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {}, [])
}
