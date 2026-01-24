import path from 'path'
import { renderToFile } from '@react-pdf/renderer'
import StandardDocument from '../lib/pdf/StandardDocument'

const outputPath = path.resolve(
  process.cwd(),
  'public/assets/The_SubSecond_Standard.pdf'
)

const build = async () => {
  try {
    await renderToFile(<StandardDocument />, outputPath)
    console.log(`PDF generated: ${outputPath}`)
  } catch (error) {
    console.error('PDF generation failed.', error)
    process.exitCode = 1
  }
}

build()
