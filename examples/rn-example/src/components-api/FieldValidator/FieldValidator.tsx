import * as React from 'react';

type Props = {
    fieldComponent: React.ReactElement,
    touched: Record<string, unknown>,
    onChange: (value, item?) => void,
    onBlur: (value) => void,
    values: any,
    errors: any,
    name: string,
    isTrim?: boolean,
};

const FieldValidator = ({
    fieldComponent: FieldComponent,
    touched,
    values,
    onChange,
    onBlur,
    isTrim,
    name,
    errors,
    ...restProps
}: Props) => {
    const error = errors[name] || {};

    React.useEffect(() => {
        if (error.error && error.errorMsg) {
            // do something
        }
    }, [error.error, error.errorMsg]);

    const handleChange = (value, item) => {
        if (isTrim && value) {
            value = value.trim();
        }
        onChange(value, item);
    };

    return (
        // @ts-ignore
        <FieldComponent
            variant={
                error.error
                    ? "error"
                    : touched[name]
                        ? "success"
                        : "default"
            }
            errorMsg={error.errorMsg}
            {...restProps}
            value={values[name]}
            onChange={handleChange}
            onBlur={onBlur(name)}
            // {...fullTestProps('field-validator')}
        />
    );
};

export default FieldValidator;
