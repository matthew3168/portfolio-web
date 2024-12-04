import { useState, useEffect } from 'react'

export default function Terminal() {
  const [text, setText] = useState('')
  const fullText = `> whoami
[user@system ~]$ security & development
> skills
[user@system ~]$ ['pentesting', 'cloud_security', 'web_dev']
> current_status
[user@system ~]$ learning && building && securing`

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
        setText(fullText.slice(0, index))
        index++
        if (index > fullText.length) clearInterval(timer)
        }, 50)
        return () => clearInterval(timer)
    }, [fullText])  // Add fullText to dependencies

    return (
    <div className="bg-black/90 p-6 rounded-lg font-mono text-green-400 w-full max-w-2xl shadow-xl">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre>
    </div>
  )
}