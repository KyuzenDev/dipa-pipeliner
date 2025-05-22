import { contentgroups } from '@/data/blog.ts'

export default function BlogCard() {
    return (
        <div className="w-300 px-15 py-12 justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {contentgroups.map((item, idx) => (
              <div key={idx} className="space-y-3 bg-linear-to-br from-gray-100 via-gray-100 to-blue-100 px-7 py-7 rounded-xl">
                <img src={item.photos.replace('public/', '/')} alt={item.title} className="rounded-lg w-full h-52 object-cover" />
                <div className="text-sm text-gray-500">{item.date} | {item.category}</div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}
