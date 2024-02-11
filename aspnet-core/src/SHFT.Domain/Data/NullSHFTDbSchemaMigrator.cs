using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SHFT.Data;

/* This is used if database provider does't define
 * ISHFTDbSchemaMigrator implementation.
 */
public class NullSHFTDbSchemaMigrator : ISHFTDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
