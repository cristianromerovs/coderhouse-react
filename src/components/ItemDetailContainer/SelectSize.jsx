import Select from 'react-select'

const options = [
    { value: 'size__xs', label: 'XS' },
    { value: 'size__s', label: 'S' },
    { value: 'size__m', label: 'M' },
    { value: 'size__l', label: 'L' },
    { value: 'size__xl', label: 'XL' }
  ]
  
   export const SelectSize = () => (
    <div className='mt-5'>
        <p className="text-sm font-semibold">Selecciona tu talla</p>
        <Select options={options} isSearchable={false} placeholder={"..."}/>
    </div>
  )

