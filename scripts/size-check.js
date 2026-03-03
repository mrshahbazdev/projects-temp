const fs = require('fs')
const path = require('path')

const PERFORMANCE = {
    maxPageWeight: 50000, // 50KB
}

const distPath = path.join(__dirname, '../dist')

function getFileSize(filePath) {
    const stats = fs.statSync(filePath)
    return stats.size
}

function checkSize() {
    if (!fs.existsSync(distPath)) {
        console.log('⚠️  dist/ directory not found. Run npm run build first.')
        return
    }

    const htmlFiles = fs.readdirSync(distPath).filter((f) => f.endsWith('.html'))
    let totalSize = 0

    htmlFiles.forEach((file) => {
        const size = getFileSize(path.join(distPath, file))
        totalSize += size
        console.log(`${file}: ${(size / 1024).toFixed(2)}KB`)
    })

    console.log(`\nTotal HTML: ${(totalSize / 1024).toFixed(2)}KB`)
    console.log(`Budget: ${PERFORMANCE.maxPageWeight / 1024}KB`)

    if (totalSize > PERFORMANCE.maxPageWeight) {
        console.error('\n❌ FAIL: Page weight exceeds budget')
        process.exit(1)
    } else {
        console.log('\n✅ PASS: Page weight within budget')
    }
}

checkSize()
