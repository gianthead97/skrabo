import io

with open('reci.txt', "r", encoding="utf-8") as f:
    text = "["

    for line in f:
        pom = "{"
        pom += f'''
        "word": "{line.strip()}",
        "chosen": 0,
        "given": 0,
        "hit": 0        
    '''
        pom += "},\n"
        text+=pom

    text += "]"
    with open('database_srb.json', "w", encoding="utf-8") as r: 
        r.write(text)
    r.close()
f.close()