type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const Checkbox = ({checked, onChange, label}: CheckboxProps) => {
 return(
  <label className="flex items-center space-x-2 cursor-pointer select-none">
    <div>
      <input 
        type="checkbox"
        checked={checked} 
        onChange={onChange}
        className="sr-only"/>
        <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-colors 
          ${checked ? 'bg-blue-600' : 'bg-white border-gray-400'}
          `}>
        </div>
        <span>{label}</span>
    </div>
  </label>
 ) 
}

export default Checkbox;