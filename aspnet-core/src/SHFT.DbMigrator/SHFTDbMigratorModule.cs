using SHFT.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace SHFT.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(SHFTEntityFrameworkCoreModule),
    typeof(SHFTApplicationContractsModule)
    )]
public class SHFTDbMigratorModule : AbpModule
{
}
