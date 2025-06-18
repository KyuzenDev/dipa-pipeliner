'use client';

import Image from 'next/image';
import { useState } from 'react';
import {Pagination} from '@/components/ui/pagination';

type User = {
  id: number;
  name: string;
  company: string;
  avatar: string;
  badge: string;
  badgeBg: string;
};

const users: User[] = [
  {
    id: 1,
    name: 'Odessa Mira',
    company: 'Altria Group',
    avatar: '/filterImage.png',
    badge: '/icons/odesa.png',
    badgeBg: 'bg-red-100',
  },
  {
    id: 2,
    name: 'Staci Owens',
    company: 'Campbell Soup',
    avatar: '/stecu.png',
    badge: '/icons/staci.png',
    badgeBg: 'bg-blue-100',
  },
  // Tambahkan lebih banyak user jika perlu
];

const USERS_PER_PAGE = 2;

export default function PreviewPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  return (
    <div className="min-h-[450px] bg-gray-50 px-6 py-4">
      <div className="flex gap-6 justify-center">
        {selectedUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-xl shadow-md p-4 w-[250px]">
            <div className={`rounded-xl p-1 ${user.badgeBg}`}>
              <Image
                src={user.avatar}
                alt={user.name}
                width={750}
                height={400}
                className="rounded-xl w-full h-[250px] object-cover grayscale"
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Image src={user.badge} alt="badge" width={75} height={75} />
              <div className="font-semibold flex flex-col">{user.name}<p className="text-sm text-gray-500">{user.company}</p></div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
