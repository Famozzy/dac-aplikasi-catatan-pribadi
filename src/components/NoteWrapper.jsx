import React from "react"
import NoteItemFallback from "./NoteItemFallback"
import SkeletonCard from "./SkeletonCard"

export default function NoteWrapper({ children, isLoading }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-3 mt-5 lg:grid-cols-2 sm:block sm:space-y-3">
        {Array(3)
          .fill()
          .map((_, i) => (
            <SkeletonCard key={i} />
          ))}
      </div>
    )
  }

  if (!children.length) {
    return <NoteItemFallback />
  }

  return <div className="grid grid-cols-3 gap-3 mt-5 lg:grid-cols-2 sm:block sm:space-y-3">{children}</div>
}
