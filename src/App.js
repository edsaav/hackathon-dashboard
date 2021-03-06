import { Icons } from '@everlywell/leaves';
import './App.css';
import { Dashboard } from './templates/Dashboard';

import * as S from './styles';

function App() {
  return (
    <div className="App">
      <S.Header
        loggedIn={true}
        activeMembership={undefined}
        numOfMemberCredits={0}
        logoSrc={
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAxMTYgMjYiPgogICAgPHBhdGggZmlsbD0iIzRCQTM3MyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNTkuOTU0IDcuMjc4djUuODEyYzAgMi4wNzIgMS4yIDMuMzc1IDMuMjM3IDMuMzc1IDEuOTUgMCAzLjI1OC0xLjY0NCAzLjI1OC0zLjUyNFY3LjI3OGgxLjc3OXYxMC44NzZjMCAzLjU0Ni0yLjI3MiA1LjE3LTQuOTUxIDUuMTctMi45MTUgMC00LjY3Mi0xLjQ1My00Ljg0NC0zLjk1MmgxLjY5M2MuMjM2IDEuNjAyIDEuMzI5IDIuMzA3IDMuMTMgMi4zMDcgMS43NTcgMCAzLjI3OS0xLjExMSAzLjI3OS0zLjU0N3YtMS45ODdjLS45MjIgMS4zNjctMi4yMyAxLjkwMi0zLjcwOCAxLjkyMy0yLjY4IDAtNC42My0xLjg4LTQuNjMtNC45NTdWNy4yNzhoMS43NTd6bS00Ny42MDMtLjIzNWMzIDAgNS4zMzcgMS42NDYgNS4zMzcgNS4yMzUgMCAuMjc4LS4wMjIuNTc3LS4wNDMuODc2SDguNjJjLjE5MyAyLjA1MSAxLjg0NCAzLjMxMiAzLjg1OCAzLjMxMiAxLjE4IDAgMi42OC0uNDQ5IDMuMzY1LTEuMzAzbDEuMiAxLjA0NmgtLjAyYy0xLjExNSAxLjI4Mi0yLjkzNyAxLjg4LTQuNTg4IDEuODgtMy4yNzkgMC01LjU3Mi0yLjEzNi01LjU3Mi01LjU3NiAwLTMuMTgzIDIuMjkzLTUuNDcgNS40ODctNS40N3ptODEuNDUzIDBjMyAwIDUuMzM3IDEuNjQ2IDUuMzM3IDUuMjM1IDAgLjI3OC0uMDIyLjU3Ny0uMDQzLjg3NmgtOS4wMjNjLjE5MiAyLjA1MSAxLjg0MyAzLjMxMiAzLjg1NyAzLjMxMiAxLjE4IDAgMi42OC0uNDQ5IDMuMzY2LTEuMzAzbDEuMiAxLjA0NmgtLjAyMWMtMS4xMTUgMS4yODItMi45MzcgMS44OC00LjU4NyAxLjg4LTMuMjggMC01LjU3My0yLjEzNi01LjU3My01LjU3NiAwLTMuMTgzIDIuMjk0LTUuNDcgNS40ODctNS40N3ptLTU3LjY2MSAwYzMgMCA1LjMzNyAxLjY0NiA1LjMzNyA1LjIzNSAwIC4yNzgtLjAyMi41NzctLjA0My44NzZoLTkuMDIzYy4xOTIgMi4wNTEgMS44NDMgMy4zMTIgMy44NTcgMy4zMTIgMS4xOCAwIDIuNjgtLjQ0OSAzLjM2Ni0xLjMwM2wxLjIgMS4wNDZoLS4wMjFjLTEuMTE1IDEuMjgyLTIuOTM3IDEuODgtNC41ODcgMS44OC0zLjI4IDAtNS41NzMtMi4xMzYtNS41NzMtNS41NzYgMC0zLjE4MyAyLjI5NC01LjQ3IDUuNDg3LTUuNDd6bS0xNS40My4yMzVsMS43MzUgNC4xMjQgMS43OCA0LjU5NCAxLjc3OC00LjU3MyAxLjcxNS00LjE0NWgxLjk1bC00LjQ4IDEwLjU3NmgtMS45MDdMMTguNzgzIDcuMjc4aDEuOTN6bTUxLjc1NCAwbDIuODcxIDguNzE4IDIuNzg2LTguNzE4aDEuNDM3bDIuODA4IDguNzE4IDIuODUtOC43MThoMS45M2wtMy42ODcgMTAuNTc2aC0yLjAxNWwtMS40NTctMy45My0xLjEzNi0zLjg0Ny0xLjE1OCAzLjg0Ni0xLjQzNiAzLjkzMWgtMS45OTNMNzAuNTE2IDcuMjc4aDEuOTV6TTQ4Ljk3IDcuMDQ0Yy45IDAgMS43NTcuMzg0IDIuNC44MzNsLS43OTMgMS40OTVjLS41NzgtLjQwNi0xLjA5My0uNTk4LTEuODQzLS41OTgtMS42OTMgMC0zLjEwOCAxLjIzOS0zLjEwOCAzLjE2MnY1Ljg5N0g0My44N1Y3LjI3OGgxLjYyOWwuMTUgMS41NmMuNzkzLTEuMzg5IDIuMTIxLTEuNzk0IDMuMzIyLTEuNzk0em02LjI3NC00LjE2N3YxNC45NTZoLTEuNzM2VjIuODc3aDEuNzM2em00OC4xIDB2MTQuOTU2aC0xLjczN1YyLjg3N2gxLjczN3ptNS42NCAwdjE0Ljk1NmgtMS43MzZWMi44NzdoMS43MzZ6bS05Ni41OSA1Ljc0OGMtMS44NDQgMC0zLjQzIDEuMDI1LTMuNzczIDMuMDc2aDcuMzNjLS4wNjQtMi4wMy0xLjQ3OC0zLjA3Ni0zLjU1OC0zLjA3NnptODEuNDUzIDBjLTEuODQzIDAtMy40MyAxLjAyNS0zLjc3MiAzLjA3Nmg3LjMzYy0uMDY0LTIuMDMtMS40NzktMy4wNzYtMy41NTgtMy4wNzZ6bS01Ny42NjEgMGMtMS44NDMgMC0zLjQzIDEuMDI1LTMuNzcyIDMuMDc2aDcuMzNjLS4wNjQtMi4wMy0xLjQ3OS0zLjA3Ni0zLjU1OC0zLjA3NnoiLz4KPC9zdmc+Cg=='
        }
        logoAlt="Everlywell"
        cartComponent={<Icons.Cart style={{'color': '#1E824C', 'cursor': 'pointer'}}/>}
      />
      <Dashboard />
    </div>
  );
}

export default App;
