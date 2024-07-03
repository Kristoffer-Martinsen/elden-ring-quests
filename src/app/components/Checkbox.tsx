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
            {checked && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1314 4L19 7"></path>
                </svg>
            )}
        </div>
        <span>{label}</span>
    </div>
  </label>
 ) 
}

export default Checkbox;