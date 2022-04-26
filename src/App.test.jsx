import App from './App'

const { render, screen, waitFor } = require('@testing-library/react')

describe('App', () => {
  it('Should render the header', async () => {
    render(<App />)
    const headerImg = screen.getByAltText('Alchemy Logo')
    const headerText = await screen.findByLabelText(/meet vonta!/i)
    expect(headerImg).toBeInTheDocument()
    expect(headerText).toBeInTheDocument()
  })
})
