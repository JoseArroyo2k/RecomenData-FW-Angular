import pandas as pd

# Ruta al archivo Excel proporcionado por el usuario
file_path = 'C:/ruta/al/archivo/categorias productos.xlsx'  # Reemplaza con la ruta correcta a tu archivo Excel
output_csv_path = 'C:/ruta/al/archivo/categorias_productos.csv'  # Reemplaza con la ruta donde quieres guardar el archivo CSV

# Leer el archivo Excel
df = pd.read_excel(file_path)

# Guardar el DataFrame como un archivo CSV
df.to_csv(output_csv_path, index=False)

print(f"El archivo CSV se ha guardado en {output_csv_path}")
