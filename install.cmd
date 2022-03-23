@ECHO OFF
:: copy js and css assests
:: todo: replace with a proper dist build
xcopy /d node_modules\bootstrap\dist\css\bootstrap.min.css frontend\static\css\
xcopy /d node_modules\bootstrap\dist\css\bootstrap.min.css.map frontend\static\css\

xcopy /d node_modules\bootstrap\dist\js\bootstrap.min.js frontend\static\js\
xcopy /d node_modules\bootstrap\dist\js\bootstrap.min.js.map frontend\static\js\