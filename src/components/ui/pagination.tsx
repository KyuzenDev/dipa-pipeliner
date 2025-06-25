import { Button } from "@/components/ui/button"
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
    <div className="flex items-center justify-center gap-4 mt-6">
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`w-16 h-16 flex items-center justify-center rounded-[999px] border transition-colors p-0 bg-white
          ${currentPage === 1
            ? "border-3 border-gray-200 text-gray-400"
            : "border-3 border-gray-200 text-gray-600 hover:bg-gray-100"}`}
        variant="ghost"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-16 h-16 flex items-center justify-center rounded-[999px] border transition-colors p-0 bg-white
          ${currentPage === totalPages
            ? "border-3 border-gray-200 text-gray-400"
            : "border-3 border-gray-200 text-black hover:bg-gray-100"}`}
        variant="ghost"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
