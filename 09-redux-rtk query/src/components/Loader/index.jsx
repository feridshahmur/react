import React from 'react'

const Loading = () => {
  return (
    <>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.loader {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n/* Safari */\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n"
    }}
  />
  <h2>How To Create A Loader</h2>
  <div className="loader" />
</>

  )
}

export default Loading