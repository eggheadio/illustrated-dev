import React, { useEffect, useState } from 'react'
import { createWorker } from 'tesseract.js'

function TesseractImage(props) {
  const worker = createWorker({
    logger: m => console.log(m),
  })
  const doOCR = async () => {
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')
    const {
      data: { text },
    } = await worker.recognize(props.imageurl)
    setOcr(text)
  }
  const [ocr, setOcr] = useState('Recognizing...')
  useEffect(() => {
    doOCR()
  })
  return (
    <div>
      <p>{ocr}</p>
    </div>
  )
}

export default TesseractImage
