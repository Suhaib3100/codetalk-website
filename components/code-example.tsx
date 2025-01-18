'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const beforeCode = `function calculateTotal(items) {
// Loop through items array
for (let i = 0; i < items.length; i++) {
  total += items[i].price * items[i].quantity
}
return total
}`

const afterCode = `/**
 * Calculates the total price of all items in the shopping cart
 * @param {Array} items - Array of items with price and quantity
 * @returns {number} - Total price of all items
 */
function calculateTotal(items) {
  // Loop through items array and calculate total price
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity
  }
  return total
}`

export function CodeExample() {
  const [activeTab, setActiveTab] = useState('before')

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-neutral-800">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800">
          <TabsList className="bg-black/40">
            <TabsTrigger value="before">Before CodeTalk</TabsTrigger>
            <TabsTrigger value="after">After CodeTalk</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="sm" className="text-xs">
            Copy
          </Button>
        </div>
        <TabsContent value="before" className="mt-0">
          <pre className="p-4 overflow-auto text-sm">
            <code>{beforeCode}</code>
          </pre>
        </TabsContent>
        <TabsContent value="after" className="mt-0">
          <pre className="p-4 overflow-auto text-sm">
            <code>{afterCode}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

