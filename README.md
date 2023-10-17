# MDX example contents

> As contents management system

## How it works?

1. The contents repo (this) runs repository-dispatch to the specified repos.
2. Project repos fetch the contents repo (this), and build the project (ex. Astro).

## Configure

1. Generate `personal access token` and set it to both contents and project repos' *Repository secrets* as `PAT`  
<https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens>

2. Specify the project repo name to the dispatch workflow.

```yml
dispatch:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        repo: ['{user_name}/{repo_name}']
```

## Example project (Astro)

Demo  
<https://cieloazul310.github.io/astro-with-private-mdx-contents/>

Repository  
<https://github.com/cieloazul310/astro-with-private-mdx-contents>
