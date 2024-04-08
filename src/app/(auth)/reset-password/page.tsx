
import { Suspense } from 'react'
import ResetPassword from './ResetPassword'

export default async function page() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <ResetPassword/>
    </Suspense>
  )
}
