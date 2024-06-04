import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

import autoAnimate from '@formkit/auto-animate'
import { Skeleton } from './components/ui/skeleton'


function App() {
  const parent = useRef(null)

  const [show, setShow] = useState(false)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
    const timer = setTimeout(() => setShow(true), 1000)

    return () => clearTimeout(timer)
  })

  return  (
    <div ref={parent} className='flex flex-col p-4 items-center justify-center h-screen'>
      <Card className='w-1/3 mb-2'>
      <CardHeader>
        <CardTitle>Starter App</CardTitle>
        <CardDescription>
          This is an Example Built in React with TypeScript, ShadCn, and Vite.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className='font-bold'>This is some sample text</p>
        <p>Some additional text</p>
      </CardContent>
    </Card>
     {show ? <Button className="bg-primary text-primary-foreground w-1/3">OK</Button> : <Skeleton className="w-1/3 rounded-.5 h-[40px] bg-accent" />}
   </div>
  ) 
}

export default App
