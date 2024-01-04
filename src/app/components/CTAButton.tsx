'use client'
import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function CTAButton({
  type,
  variant,
  size,
  colorScheme = 'brand',
}: {
  type: string
  variant: string
  size: string | object
  colorScheme: string
}) {
  const [text, setText] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (type === 'cta_donate') {
      setText('Donate Now')
    }
  }, [type])

  useEffect(() => {
    if (type === 'cta_donate') {
      setUrl('https://www.paypal.com/donate/?hosted_button_id=WT7WGSCGNCF9U')
    }
  }, [type])

  const onClick = () => {
    window.open(url, '_blank')
  }

  return (
    <Button
      variant={variant}
      size={size}
      colorScheme={colorScheme}
      onClick={onClick}
      textTransform='uppercase'
    >
      {text || 'CTA Button'}
    </Button>
  )
}
