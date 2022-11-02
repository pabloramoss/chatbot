import React, { useState } from "react"
import styled from "styled-components"

const ChatbotKeyContainer = styled.div`
  height: 300px;
  width: 600px;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;
  color: black;
  padding: 2rem;

  p, h5 {
    margin: 0;
  }

  img {
  }
`

export const ChatbotKey: React.FC = () => {
  const [token, setToken] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value)
  }

  return (
    <ChatbotKeyContainer>  
      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
          <h2>Chatbot for Telegram</h2>
          <p>Create Telegram bots to inform, advise and even sell goods and services.</p>
          <p>To connect a Telegram bot you need the bot's token</p>
          <h5>Enter the access key token (bot token)</h5>
        </div>
        <img height={100} width={100} src="https://via.placeholder.com/100" alt="telegram placeholder"/>
      </div>
      <form style={{display: "flex"}}>
        <input onChange={handleChange} placeholder="bot token" />
        <button>Connect</button>
      </form>
      <p>How do I get bot's token?</p>
    </ChatbotKeyContainer>
  )
}