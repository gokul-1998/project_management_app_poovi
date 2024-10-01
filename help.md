step: 1
   npx create-next-app@latest

installed packeges:
  npm i @mui/material @emotion/react @emotion/styled lucide-react numeral date-fns axios recharts react-dnd react-dnd-html5-backend gantt-task-react

  npm i @mui/x-data-grid

  npm i -D @types/node @types/uuid @types/numeral



  <!-- postgres -->
  SELECT setval(pg_get_serial_sequence('"DATA_MODEL_NAME_HERE"','id'),coalesce(max(id)+1,1),false) FROM "[DATA_MODEL_NAME_HERE]";