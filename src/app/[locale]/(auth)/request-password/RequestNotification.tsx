import React from 'react'

export default function RequestNotification({
  notification
}: {
  notification:string
}) {
  return (
    <div className="h-screen w-screen flex justify-center pt-72">
        <p className="text-3xl">{notification}</p>
    </div>
  )
}
