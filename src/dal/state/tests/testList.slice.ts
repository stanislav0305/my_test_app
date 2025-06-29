import { Test, TestList } from '@dal/entities/TestList'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@dal/state/store';
import { TestHeaderModel } from '@bll/models/TestHeaderModel';


const testListSlice = createSlice({
  name: 'testList',
  initialState: {
    tests: [
      {
        id: '1',
        name: "Тест цветов",
        options: {
          passMode: 'byParts',
          partsOptions: {
            count: 1,
            size: 3,
            order: 'random'
          }
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_yellow.mp3",
            answers: [{
              color: "#ffff00",
              value: "a_yellow.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_red.mp3",
            answers: [{
              color: "#ff0000",
              value: "a_red.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_black.mp3",
            answers: [{
              color: "#000000",
              value: "a_black.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_white.mp3",
            answers: [{
              color: "#FFFFFF",
              value: "a_white.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_blue.mp3",
            answers: [{
              color: "#0000FF",
              value: "a_blue.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_light_blue.mp3",
            answers: [{
              color: "#81d4fa",
              value: "a_light_blue.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_brown.mp3",
            answers: [{
              color: "#482218",
              value: "a_brown.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_gray.mp3",
            answers: [{
              color: "#808080",
              value: "a_gray.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_orange.mp3",
            answers: [{
              color: "#FFA500",
              value: "a_orange.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_pink.mp3",
            answers: [{
              color: "#FFC0CB",
              value: "a_pink.mp3",
              isCorrect: true
            }]
          },
          {
            question: "q_violet.mp3",
            answers: [{
              color: "#7F00FF",
              value: "a_violet.mp3",
              isCorrect: true
            }]
          },
        ],
      },
      {
        id: '2',
        name: "Тест цветов 2",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '3',
        name: "Тест цветов 3",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '4',
        name: "Тест цветов 4",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '5',
        name: "Тест цветов 5",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '6',
        name: "Тест цветов 6",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '7',
        name: "Тест цветов 7",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '8',
        name: "Тест цветов 8",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '9',
        name: "Тест цветов 9",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '10',
        name: "Тест цветов 10",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '11',
        name: "Тест цветов 11",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      },
      {
        id: '12',
        name: "Тест цветов 12",
        options: {
          passMode: 'full',
          partsOptions: null,
        },
        additional: {
          correctPhrases: [
            "good_job_correct.mp3",
            "prefect_correct.mp3",
            "yes_correct.mp3"
          ],
          incorrectPhrases: [
            "no_incorrect.mp3"
          ]
        },
        questions: [
          {
            question: "q_green.mp3",
            answers: [{
              color: "#008000",
              value: "a_green.mp3",
              isCorrect: true
            }]
          }
        ]
      }
    ]
  } satisfies TestList,
  reducers: {}
})

export const { } = testListSlice.actions
export default testListSlice.reducer;

// selectors
export const testList = (state: RootState) => state.testList
export const getTestFirstOrDefault = (state: RootState, id: string): Test | undefined => state.testList.tests.find(t => t.id === id)
export const getTestHeaders = (state: RootState): TestHeaderModel[] | undefined => state.testList.tests.map(t => {
  return {
    id: t.id,
    name: t.name
  } as TestHeaderModel
})

//const itemsPerPage = 5;
//const currentPage = 1; // Assuming a 1-based index for pages
//const startIndex = (currentPage - 1) * itemsPerPage;
//const endIndex = startIndex + itemsPerPage;
//const paginatedItems = filteredItems.slice(startIndex, endIndex);


/*
const store = configureStore({
  reducer: testListSlice.reducer
})

// Can still subscribe to the store
subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
*/