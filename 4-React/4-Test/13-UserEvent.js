/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
===================================================================================================================================
 
میکنه و ما میتونیم هر fire  هامون استفاده بکنیم ما راه حل های قبلی که داشتیم فقط برای ما یک رویداد رو میاد و event  ما از این پکیج میتونیم بیایم و برای شبیه سازی رویداد ها یا 
بکنیم fire تعداد رویدادی که کاربر داره رو بیایم و برای خودمون 

export default function Contact({ onSave }) {

    const [email, setEmail] = useState('')
    const [isSubmitedSuccess, setIsSubmitedSuccess] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        onSave({
            email
        })
        setEmail('')
        setIsSubmitedSuccess(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit">submit</button>
            </form>
            {isSubmitedSuccess && <p role='alert'>success</p>}
        </>
    )
}

===================================================================================================================================

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'
it('typeing email', () => {

    render(<Contact />)

    userEvent.type(screen.getByRole('textbox'), 'info@7learn.com')

    expect(screen.getByRole('textbox')).toHaveValue('info@7learn.com')
})

it('submit user info successfully', async () => {
    const onSave = jest.fn() // یک تابع میسازیم

    render(<Contact onSave={onSave} />)

    userEvent.type(screen.getByRole('textbox'), 'info@7learn.com')
    
    userEvent.click(screen.getByRole('button'))

    await screen.findByRole('alert')

    expect(screen.getByRole('alert')).toHaveTextContent('success')

    expect(screen.getByRole('textbox')).toBeEmptyDOMElement()

    expect(onSave).toHaveBeenCalledTimes(1)

    expect(onSave).toBeCalledWith({ email: 'info@7learn.com' })
})

===================================================================================================================================
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
