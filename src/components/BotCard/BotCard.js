import Card from 'antd/lib/card/Card'
import React from 'react'
import { Button, Badge, Typography } from 'antd'
const { Text } = Typography

const BotCard = (props) => {
  return (
    <Card>
      <div className="flex justify-between pa3">
        <div className="flex flex-column tl">
          <Text>{props.botName}</Text>
          <Text className="f6 lh-copy fw1">Bot Key: {props.botKey}</Text>
        </div>
        <div className="flex items-center">
          <Badge status="default" text={props.botContract} />
          <Button
            colorScheme="teal"
            size="md"
            className="ml3"
            onClick={props.onDeleteBotEvent}
          >
            Aplicar
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default BotCard
