import pandas as pd
import json

df = pd.read_excel('students.xlsx')

program_cols = ['Roll', 'Name', 'Gender', 'Programme', 'Branch']
programs = df[program_cols].to_dict(orient='records')
json_data = json.dumps(programs)
file_path = "students.json"

with open(file_path, 'w') as f:
    f.write(json_data)