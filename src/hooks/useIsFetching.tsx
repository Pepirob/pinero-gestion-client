import { useState } from 'react'

export const useIsFetching = () => {
  const [isFetching, setIsFetching] = useState(false)

  return { isFetching, setIsFetching }
}
