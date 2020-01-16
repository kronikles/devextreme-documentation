---
default: undefined
acceptValues: 'numeric' | 'datetime' | 'string'
type: string
---
---
##### shortDescription
Casts values to a specified data type.

---
If your data source stores, for example, numbers as strings, specify the proper data type using the **valueType** option.

[note]If dates in your data source are stored as strings, make sure that they have a [valid format](https://www.w3schools.com/js/js_date_formats.asp).

#####See Also#####
- **argumentAxis** | [argumentType](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType') - casts arguments to a proper data type.
- **valueAxis** | [type](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type') - specifies the axis type.
- **dataPrepareSettings** | [checkTypeForAllData](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/dataPrepareSettings/checkTypeForAllData.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/dataPrepareSettings/#checkTypeForAllData') - validates the type of each value coming from the data source.
- **dataPrepareSettings** | [convertToAxisDataType](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/dataPrepareSettings/convertToAxisDataType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/dataPrepareSettings/#convertToAxisDataType') - allows you to disable the type cast in favour of the widget performance.