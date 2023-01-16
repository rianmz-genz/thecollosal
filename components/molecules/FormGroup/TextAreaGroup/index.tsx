import { useEffect, useState } from 'react'
import randomString from '../../../../utils/randomString'
import Label from '../../../atoms/Label'
import TextArea, {TextAreaProps} from '../../../atoms/Form/Textarea'

interface TextAreaGroupProps extends TextAreaProps {
  label: string
}
const TextAreaGroup = ({
  label,
  defaultValue,
  onChange,
  onSubmit,
  required,
  rows,
  placeholder,
}: TextAreaGroupProps) => {
  const [randomId, setRandomId] = useState<string>('')
  useEffect(() => {
    setRandomId(randomString(64)) 
  }, [])
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={randomId} />
      <TextArea
        defaultValue={defaultValue}
        id={randomId}
        onChange={onChange}
        onSubmit={onSubmit}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </div>
  )
}

export default TextAreaGroup
