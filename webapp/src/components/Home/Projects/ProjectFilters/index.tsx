import { Container, Tab, Tabs, TextField, AppBar } from '@material-ui/core';
import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { ProjectCategory } from '../Project';

const CenteredContainer = styled(Container)`
    justify-content: center;
    margin: 1rem 0;
`;

export interface IProjectFilters {
    categoryFilter: string;
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const projectCategories = Object.values(ProjectCategory);

const ProjectFilters = ({
    categoryFilter,
    setCategoryFilter,
    inputText,
    setInputText
}: IProjectFilters): ReactElement => {
    return (
        <>
            <CenteredContainer>
                <TextField
                    type="text"
                    placeholder="Filter"
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}
                />
            </CenteredContainer>
            <CenteredContainer>
                <AppBar position="static">
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        id="category-tabs"
                        value={categoryFilter}
                        onChange={(event, newValue) =>
                            setCategoryFilter(newValue)
                        }
                    >
                        {projectCategories.map((categoryName) => (
                            <Tab
                                key={categoryName}
                                id={categoryName}
                                label={categoryName}
                                value={categoryName}
                            />
                        ))}
                    </Tabs>
                </AppBar>
            </CenteredContainer>
        </>
    );
};

export default ProjectFilters;
