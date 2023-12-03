/**
 * Converts a value to a string representation.
 * If the value is already a string, it is returned as is.
 * If the value is a number, it is converted to a string.
 * For other types of values, they are converted to a JSON string.
 * 
 * @param a - The value to convert to a string.
 * @returns The string representation of the value.
 */
function toStringCustom(a: any){
    if(typeof a === 'string') return a;
    else if(typeof a === 'number') return a.toString();
    else return JSON.stringify(a);
}

/**
 * Converts a JSON array to a CSV string.
 * @param table The JSON array to convert.
 * @returns The URI-encoded CSV string.
 */
export const jsonToCSV = (table: any[])=>{
    const heaaders: string[] = [];
    for(const key in table[0])
      heaaders.push(key);
    const  csvContent = 
        "data:text/csv;charset=utf-8," 
        + heaaders.join(",") + "\n" 
        + table.map(
            (row) => 
                heaaders.map(h=>toStringCustom(row[h])).join(",")
          ).join("\n");
    const uri = encodeURI(csvContent);
    return uri;
}