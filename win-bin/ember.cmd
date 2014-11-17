@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\ember-cli\bin\ember" %*
) ELSE (
  node  "%~dp0\node_modules\ember-cli\bin\ember" %*
)