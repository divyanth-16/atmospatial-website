// src/components/LoadingSkeleton.jsx
//
// Skeleton placeholder rows shown while books/journals are being fetched.

function SkeletonRow() {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 py-5 px-4 animate-pulse"
      style={{ borderBottom: '1px solid #E5ECF8' }}
    >
      <div className="flex-1 space-y-2">
        <div className="h-2.5 w-20 rounded-full" style={{ background: '#EEF6FF' }} />
        <div className="h-4 w-2/3 rounded-full"  style={{ background: '#EEF6FF' }} />
        <div className="h-3 w-1/3 rounded-full"  style={{ background: '#EEF6FF' }} />
        <div className="h-3 w-full rounded-full"  style={{ background: '#EEF6FF' }} />
        <div className="h-3 w-4/5 rounded-full"  style={{ background: '#EEF6FF' }} />
      </div>
      <div className="flex gap-2 sm:flex-col sm:items-end shrink-0">
        <div className="h-7 w-20 rounded" style={{ background: '#EEF6FF' }} />
        <div className="h-7 w-20 rounded" style={{ background: '#EEF6FF' }} />
      </div>
    </div>
  )
}

export default function LoadingSkeleton({ rows = 5 }) {
  return (
    <div>
      {Array.from({ length: rows }).map((_, i) => (
        <SkeletonRow key={i} />
      ))}
    </div>
  )
}
