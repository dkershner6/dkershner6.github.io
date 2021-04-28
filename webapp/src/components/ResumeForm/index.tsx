import React, { ReactElement, useState } from 'react';

import {
    Box,
    Button,
    Chip,
    Container,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@material-ui/core';
import IconPlus from '@material-ui/icons/Add';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useSetAsState } from 'use-set-as-state';

import Resume from '../../lib/common/resume/Resume';
import resumeDefaults from '../../lib/server/resume/resumeDefaults';

interface ResumeFormData {
    slug: string;
    'cover-letter-1': string;
    'cover-letter-2': string;
    'cover-letter-3': string;
    'cover-letter-4': string;
    'cover-letter-5': string;
    'cover-letter-6': string;
    'cover-letter-7': string;
    'cover-letter-8': string;
    'cover-letter-9': string;
    'cover-letter-10': string;
    objective: string;
}

const COVER_LETTER_PARAGRAPH_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ResumeForm = (): ReactElement => {
    const { register, handleSubmit } = useForm<ResumeFormData>();

    const [password, setPassword] = useState('');

    const { mutate: saveResume } = useMutation<Resume, AxiosError, Resume>(
        async (variables) => {
            const { data } = await axios.post<Resume>(
                `/api/resume?password=${password}`,
                variables
            );
            return data;
        }
    );

    const onSubmit = (formData: ResumeFormData): void => {
        const coverLetter = COVER_LETTER_PARAGRAPH_NUMBERS.map(
            (paragraphNumber) => formData[`cover-letter-${paragraphNumber}`]
        ).filter((paragraph) => !!paragraph && paragraph.length > 0);
        const resumeSkills = [...skills].map((skill) => ({
            name: skill
        }));
        const resume: Resume = {
            slug: formData.slug,
            updatedAt: new Date().toISOString(),
            coverLetter,
            resume: {
                ...resumeDefaults,
                basics: {
                    ...resumeDefaults.basics,
                    summary: formData.objective
                },
                skills: resumeSkills
            }
        };
        saveResume(resume);
    };

    const [skillInput, setSkillInput] = useState('');
    const skills = useSetAsState(new Set<string>());

    const renderCoverLetterFields = () => {
        return COVER_LETTER_PARAGRAPH_NUMBERS.map((paragraphNumber) => {
            return (
                <Box key={paragraphNumber} marginBottom="2rem">
                    <TextField
                        inputProps={{
                            // @ts-expect-error - Cant detect the interpolation
                            ...register(`cover-letter-${paragraphNumber}`)
                        }}
                        name={`cover-letter-${paragraphNumber}`}
                        label={`Cover Letter Paragraph ${paragraphNumber}`}
                        variant="outlined"
                        multiline
                        fullWidth
                        rows={4}
                    />
                </Box>
            );
        });
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box marginTop="2rem" marginBottom="2rem">
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Box>
                <Box marginTop="2rem" marginBottom="2rem">
                    <TextField
                        inputProps={{ ...register('slug') }}
                        name="slug"
                        label="Slug"
                        variant="outlined"
                        fullWidth
                    />
                </Box>
                <Typography variant="h2">Cover Letter</Typography>
                {renderCoverLetterFields()}
                <Typography variant="h2">Resume</Typography>
                <Box marginBottom="2rem">
                    <TextField
                        inputProps={{ ...register('objective') }}
                        name={`objective`}
                        label={`Objective`}
                        variant="outlined"
                        multiline
                        fullWidth
                        rows={4}
                    />
                </Box>
                <Box marginBottom="2rem">
                    <TextField
                        label="Relevant Skills"
                        variant="outlined"
                        fullWidth
                        value={skillInput}
                        onChange={(event) => setSkillInput(event.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => {
                                            skills.add(skillInput);
                                            setSkillInput('');
                                        }}
                                    >
                                        <IconPlus />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    {[...skills].map((skill) => (
                        <Chip
                            key={skill}
                            label={skill}
                            onDelete={() => skills.delete(skill)}
                        />
                    ))}
                </Box>
                <Box marginBottom="2rem" textAlign="center">
                    <Button type="submit" color="primary" variant="contained">
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default ResumeForm;
