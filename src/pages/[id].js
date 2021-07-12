import { useRouter } from 'next/router'

const Tour = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Tour: {id}</p>
}

export default Tour;