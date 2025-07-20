import { Suspense } from 'react'
import VoiceAssistant from '../components/VoiceAssistant'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VoiceAssistant />
    </Suspense>
  )
}
