import { Flow } from "../Flow"
import { ChatbotKey } from "./ChatbotKey"

export const Dashboard: React.FC = () => {

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", }}>
        <ChatbotKey />
        {/* <Flow /> */}
      </div>
    </>
  )
}