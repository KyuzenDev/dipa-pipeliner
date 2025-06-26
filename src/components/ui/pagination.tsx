import { ChevronLeft, ChevronRight } from "lucide-react"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex items-center justify-start gap-4 mt-6">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`w-12 h-12 flex items-center justify-center rounded-full border cursor-pointer transition-colors p-0 bg-white
          ${currentPage === 1
           ? "border-1 border-grayscale-200 text-grayscale-400"
            : "border-1 border-grayscale-200 text-black hover:bg-grayscale-100"}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-12 h-12 flex items-center justify-center rounded-full border cursor-pointer transition-colors p-0 bg-white
          ${currentPage === totalPages
            ? "border-1 border-grayscale-200 text-grayscale-400"
            : "border-1 border-grayscale-200 text-black hover:bg-grayscale-100"}`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
