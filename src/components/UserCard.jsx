import React from 'react'

function UserCard({ user }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[auto_220px_50px_50px_50px_1fr] gap-x-6 gap-y-2 mb-8 md:mb-4 last:mb-0 items-center'>
      <img
        src={user.picture.thumbnail}
        alt='avatar'
        className='w-8 h-8 rounded-full'
      />
      <div>
        <p className='text-base font-medium text-black'>
          {user.name.first} {user.name.last}
        </p>
        <p className='text-sm text-gray-500'>{user.email}</p>
      </div>
      <div className='flex gap-x-4 items-center md:contents'>
        <div className='text-center text-base font-medium text-black'>
          {user.dob.age}
        </div>
        <div>
          <p
            className={`inline-block p-1 text-sm rounded-lg opacity-50 ${
              user.gender === 'female'
                ? 'bg-pink-500 text-white'
                : user.gender === 'male'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-500 text-white'
            }`}
          >
            {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
          </p>
        </div>
      </div>
      <div className='flex gap-x-4 items-center md:contents'>
        <div className='flex justify-center max-md:min-w-fit'>
          <img
            src={`https://flagcdn.com/32x24/${user.nat.toLowerCase()}.webp`}
            alt={`${user.location.country} flag`}
            className='w-6 h-6'
          />
        </div>
        <div className='md:ml-6'>
          <p className='text-base font-medium text-black break-all'>
            {user.location.street.name} {user.location.street.number},{' '}
            {user.location.city}, {user.location.country}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserCard
