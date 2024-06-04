import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
function App() {

  return (
   <div className='flex flex-col p-4 items-center justify-center h-screen'>
    <Card className='w-1/3 mb-2'>
      <CardHeader>
        <CardTitle>Terms And Conditions</CardTitle>
        <CardDescription>
          This is an Example Built in React with TypeScript, ShadCn, and Vite.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className='font-bold'>This is some sample text</p>
        <p>Some additional text</p>
      </CardContent>

    </Card>
     <Button className="bg-primary text-primary-foreground w-1/3">OK</Button>
   </div>
  )
}

export default App
