'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import useChat from '@/hooks/useChat'

export default function ChatForm() {
  const {
    inputMessage,
    setInputMessage,
    sendMessage,
    setInputImage,
    sendImageHandler,
  } = useChat()
  const [images, setImages] = useState<string[]>([])
  const textarea = useRef<HTMLTextAreaElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value)
    // textarea 높이 조절
    if (textarea && textarea.current) {
      textarea.current.style.height = 'auto' // height 초기화
      textarea.current.style.height = `${textarea.current.scrollHeight}px`
    }
  }

  const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessageHandler()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessageHandler()
    sendImageHandler()
  }

  const sendMessageHandler = () => {
    if (!inputMessage.trim() && !images) return
    sendMessage()
    sendImageHandler()
    setInputMessage('')
    setImages([])
    setInputImage([])
    if (textarea && textarea.current) {
      textarea.current.style.height = 'auto' // height 초기화
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles = e.target.files as FileList
    if (!targetFiles) return

    const targetFilesArray = Array.from(targetFiles)
    setInputImage(targetFilesArray)
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file)
    })

    setImages(selectedFiles)
  }

  return (
    <>
      {images.length > 0 && (
        <div className="fixed bottom-[70px] left-0 right-0 flex p-3 gap-3 bg-gray-800 bg-opacity-40 z-50">
          {images.map((image, index) => (
            <Image key={index} src={image} width={50} height={50} alt="image" />
          ))}
          <button
            type="button"
            onClick={() => setImages([])}
            className="absolute right-3 top-2 text-white"
          >
            X
          </button>
        </div>
      )}
      <div className="bg-white w-full flex items-center pb-[10px]">
        <form
          className="my-3 mx-[12px] flex gap-4 items-center w-full"
          onSubmit={handleSubmit}
        >
          <button
            className="hover:brightness-110"
            type="button"
            onClick={() => inputRef.current?.click()}
          >
            <Image
              width={25}
              height={25}
              src="/images/chat-add-file.svg"
              alt="button"
            />
            <input
              type="file"
              multiple
              ref={inputRef}
              onChange={handleChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </button>
          <textarea
            ref={textarea}
            value={inputMessage}
            onChange={onChangeContent}
            onKeyDown={onEnter}
            maxLength={1000}
            rows={1}
            className="max-h-[100px] h-10 w-full bg-transparent outline-0 rounded-2xl border px-4 py-2 flex-1 resize-none no-scrollbar"
            placeholder="채팅을 입력하세요"
          />
          <button
            className="hover:brightness-110"
            type="submit"
            disabled={!inputMessage?.trim()}
          >
            <Image
              width={35}
              height={35}
              src="/images/chat-send-button.svg"
              alt="button"
            />
          </button>
        </form>
      </div>
    </>
  )
}
