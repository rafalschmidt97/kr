echo "1. Replacing relative paths"
reprec -p '"../../static/' -i '"https://klaudiarafal.pl/static/' -n -f '.*\.[md,html]' _site
reprec -p '"../static/' -i '"https://klaudiarafal.pl/static/' -n -f '.*\.[md,html]' _site
reprec -p '"static/' -i '"https://klaudiarafal.pl/static/' -n -f '.*\.[md,html]' _site
reprec -p '"../../assets/' -i '"https://klaudiarafal.pl/assets/' -n -f '.*\.[md,html]' _site
reprec -p '"../assets/' -i '"https://klaudiarafal.pl/assets/' -n -f '.*\.[md,html]' _site
reprec -p '"assets/' -i '"https://klaudiarafal.pl/assets/' -n -f '.*\.[md,html]' _site
# reprec -p '"../' -i '"/' -n -f '.*\.[md,html]' _site # nav links
# reprec -p '".."' -i '"/"' -n -f '.*\.[md,html]' _site #nav homepage
echo "Replacing relative paths completed ✅"