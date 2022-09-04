import { forwardRef } from 'react';
import { INPUT_MAX_LENGTH } from './../../utils/consts';

const TextInput = forwardRef(
  ({ className, state, stateHandler, label, name, placeholder }, ref) => {
    if (typeof state !== 'string') {
      throw new TypeError(
        `TextInput state should be of type String, got ${state}`
      );
    }

    if (typeof stateHandler !== 'function') {
      throw new TypeError(
        `TextInput stateHandler should be of type Function, got ${stateHandler}`
      );
    }

    if (typeof name !== 'string') {
      throw new TypeError(
        `TextInput name should be of type String, got ${name}`
      );
    }

    if (typeof placeholder !== 'string') {
      throw new TypeError(
        `TextInput placeholder should be of type String, got ${placeholder}`
      );
    }

    function pasteHandler(e) {
      const data = e.clipboardData.getData('Text');

      if (state?.length + data?.length > INPUT_MAX_LENGTH) {
        stateHandler((oldVal) => {
          return (oldVal + data)?.slice(0, INPUT_MAX_LENGTH);
        });
      }
    }

    const validationColor =
      state?.length > INPUT_MAX_LENGTH / 2
        ? state?.length > INPUT_MAX_LENGTH - 10
          ? 'text-red-500'
          : 'text-orange-500'
        : 'text-black';

    return (
      <div className="flex grow flex-col gap-1">
        {label && (
          <label htmlFor={label?.replace(/\s/g, '-')} className="capitalize">
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={label?.replace(/\s/g, '-')}
          type="text"
          name={name}
          placeholder={placeholder}
          className={`${className} rounded-sm border border-gray-300 px-4 py-2`}
          value={state}
          onInput={(e) => stateHandler(e.target.value)}
          onPaste={pasteHandler}
          autoComplete="off"
          disabled={state?.length > INPUT_MAX_LENGTH - 1}
        />

        <span className={`${validationColor}`}>
          {state?.length}/{INPUT_MAX_LENGTH}
        </span>
      </div>
    );
  }
);

export default TextInput;
