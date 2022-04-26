import App from '../../App'

const { render, screen, waitFor } = require('@testing-library/react')
const { default: Home } = require('./Home')

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

describe('Profile', () => {
  it('Should render the user profile', async () => {
    render(<Home user={user} />)
    const nameText = await screen.findByText(/vonta/i)
    const favText = await screen.findByText(/favorite color:/i)
    const mottoText = screen.getByText(/Res Non Verba/i)
    const avatarImage = screen.getByAltText(/avatar/i)
    const headerImage = screen.getByAltText(/header/i)
    const interestsHeader = screen.getByText(/interests/i)
    const likesList = screen.getAllByRole('listitem')

    expect(nameText).toBeInTheDocument()
    expect(favText).toBeInTheDocument()
    expect(mottoText).toBeInTheDocument()
    expect(avatarImage).toBeInTheDocument()
    expect(headerImage).toBeInTheDocument()
    expect(interestsHeader).toBeInTheDocument()
    expect(likesList.length).toEqual(6)
  })
})
