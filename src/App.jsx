import React from 'react'
import {
  faVenus,
  faUsers,
  faWalking,
  faMars,
  faFlag
} from '@fortawesome/free-solid-svg-icons'
import SummaryCard from './components/SummaryCard'
import UserCard from './components/UserCard'
import { useUsers } from './hooks/use-users-list'
import { calculateSummaries } from './utils/summary-utils'

function App() {
  const { users, loading } = useUsers()
  const { differentNationality, mostGender, averageAge, averageMembership } =
    calculateSummaries(users)

  return (
    <section className='bg-[#E5E5F2] min-h-screen flex flex-col justify-center items-center p-5'>
      <div className='relative bg-[#F2F2FC] shadow-2xl rounded-lg px-4 pb-4 pt-8 space-y-4 w-full max-w-5xl'>
        {loading && (
          <div className='absolute inset-0 z-[2] flex h-full w-full items-center justify-center bg-[#F2F2FC] opacity-75'>
            <div
              className='inline-block h-12 w-12 animate-spin rounded-full border-4 border-current border-t-transparent'
              role='status'
              aria-label='loading'
            />
          </div>
        )}

        <p className='text-base font-bold text-black'>Member Dashboard</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <SummaryCard
            title='Different Nationality'
            value={differentNationality}
            icon={faFlag}
          />
          <SummaryCard
            title='Most Gender'
            value={mostGender}
            icon={mostGender === 'Female' ? faVenus : faMars}
          />
          <SummaryCard
            title='Average Age'
            value={`~${averageAge}`}
            icon={faWalking}
          />
          <SummaryCard
            title='Average Membership'
            value={`~${averageMembership} year`}
            icon={faUsers}
          />
        </div>

        <div className='py-4 px-4 md:px-6 max-h-[50vh] overflow-y-auto'>
          {users.length === 0 ? (
            <p className='text-center text-gray-500'>No members found.</p>
          ) : (
            users.map((user, index) => <UserCard key={index} user={user} />)
          )}
        </div>
      </div>
    </section>
  )
}

export default App
