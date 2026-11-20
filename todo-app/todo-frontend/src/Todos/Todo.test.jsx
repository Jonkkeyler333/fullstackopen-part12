import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

test('Renders content', () => {
    const todo = {
        'id': 1,
        'text': 'Test todo',
        'done': false
    }
    const mockDelete = vi.fn()
    const mockComplete = vi.fn()
    render(<Todo todo={todo} onClickDelete={() => mockDelete()} onClickComplete={() => mockComplete()} />)
    screen.debug()
    const element = screen.getByText('Test todo')
    screen.debug(element)
    expect(element).toBeDefined()
})

test('Clicking done button change the state', async () => {
    const todo = {
        'id': 1,
        'text': 'Test todo',
        'done': false
    }
    const mockDelete = vi.fn()
    const mockComplete = vi.fn()
    render(<Todo todo={todo} onClickDelete={() => mockDelete()} onClickComplete={() => mockComplete()} />)
    screen.debug()
    const user = userEvent.setup()
    const button = screen.getByText('Set as done')
    expect(button).toBeDefined()
    await user.click(button)
    expect(mockComplete.mock.calls).toHaveLength(1)
})