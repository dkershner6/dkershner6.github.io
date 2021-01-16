import React, { ReactElement } from 'react';

import {
    Container,
    TextField,
    Select,
    InputLabel,
    Grid,
    FormControl
} from '@material-ui/core';
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
        <CenteredContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="search-projects-filter"
                        type="text"
                        variant="outlined"
                        label="Search Projects"
                        placeholder="Search Projects"
                        value={inputText}
                        onChange={(event) => setInputText(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="category-filter">
                            Category
                        </InputLabel>
                        <Select
                            native
                            value={categoryFilter}
                            onChange={(event) =>
                                setCategoryFilter(event.target.value as string)
                            }
                            inputProps={{ id: 'category-filter' }}
                        >
                            {projectCategories.map((categoryName) => (
                                <option key={categoryName} value={categoryName}>
                                    {categoryName}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </CenteredContainer>
    );
};

export default ProjectFilters;
